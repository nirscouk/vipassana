import re
from pathlib import Path

src = Path(r"D:\Projects\vipassana\Path to Enlightenment.md")
out = Path(r"D:\Projects\vipassana\Path to Enlightenment")
out.mkdir(exist_ok=True)

# clear previous chapter files
for old in out.glob("*.md"):
    old.unlink()

text = src.read_text(encoding="utf-8")
chunks = re.split(r"\n(?=## Chapter |\n# A letter|# Appendix|# Glossary|# Part )", text)

merged = []
pending_part = None
for ch in chunks:
    t = ch.strip()
    if t.startswith("# Part "):
        pending_part = t
        continue
    if pending_part and t.startswith("## Chapter"):
        t = pending_part + "\n\n---\n\n" + t
        pending_part = None
    merged.append(t)

front = re.split(r"\n## Contents\n", merged[0])[0].strip() + "\n"


def chapter_meta(block: str):
    heading = None
    for line in block.splitlines():
        if line.startswith("## Chapter") or (
            line.startswith("# ") and not line.startswith("# Part")
        ):
            heading = line
            break
    if heading is None:
        heading = block.splitlines()[0]
    line = heading.lstrip("#").strip()
    m = re.match(r"Chapter (\d+)\s*·\s*(.+)", line)
    if m:
        n = int(m.group(1))
        title = m.group(2).strip()
        slug = slugify(title)
        return f"{n:02d}-{slug}.md", n, f"Chapter {n}", title
    if line.startswith("A letter"):
        return "23-a-letter-to-the-one-who-is-starting.md", 23, "Letter", line
    if line.startswith("Appendix"):
        return "24-appendix-course-record.md", 24, "Appendix", "One practitioner’s course record"
    if line.startswith("Glossary"):
        return "25-glossary.md", 25, "Glossary", "Glossary of living words"
    slug = slugify(line)
    return f"xx-{slug}.md", 99, "Section", line


def slugify(title: str) -> str:
    repl = {
        "ā": "a", "ī": "i", "ū": "u", "ṅ": "n", "ñ": "n",
        "ṭ": "t", "ḍ": "d", "ṇ": "n", "ṃ": "m", "ṁ": "m",
        "ś": "s", "ṣ": "s", "ḥ": "h", "ö": "o", "é": "e",
        "’": "", "'": "", "—": "-", "–": "-",
    }
    s = title.lower()
    for a, b in repl.items():
        s = s.replace(a, b)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:60]


entries = [("00-how-to-use.md", 0, "Start here", "How to use this book", front)]
for block in merged[1:]:
    fname, num, kind, title = chapter_meta(block)
    entries.append((fname, num, kind, title, block.strip() + "\n"))

entries.sort(key=lambda e: e[1])


def nav(i):
    prev_link = "[← Previous](%s)" % entries[i - 1][0] if i > 0 else "← Previous"
    next_link = "[Next →](%s)" % entries[i + 1][0] if i < len(entries) - 1 else "Next →"
    return f"{prev_link} · [Contents](README.md) · {next_link}"


for i, (fname, num, kind, title, body) in enumerate(entries):
    bar = nav(i)
    page = f"{bar}\n\n{body.rstrip()}\n\n---\n\n{bar}\n"
    (out / fname).write_text(page, encoding="utf-8")

# README / contents
toc_lines = [
    "# Path to Enlightenment",
    "",
    "*A guide for the walker of the path*",
    "",
    "How to follow the way of Gautama Buddha — from first refuge to the end of suffering.",
    "",
    "Read **chapter by chapter**. Each file is one chapter. Every chapter ends with a **Today** practice.",
    "",
    "## Contents",
    "",
    "0. [How to use this book](00-how-to-use.md)",
    "",
    "### Part I · Why anyone would walk this path",
    "",
]
part_breaks = {
    4: "### Part II · The map he left",
    8: "### Part III · Beginning, if you are beginning",
    12: "### Part IV · The work that frees",
    17: "### Part V · A life shaped by the Dhamma",
    20: "### Part VI · Where the path is going",
    23: "### Closing",
}
for fname, num, kind, title, _ in entries:
    if num in part_breaks:
        toc_lines += ["", part_breaks[num], ""]
    if num == 0:
        continue
    if num <= 22:
        toc_lines.append(f"{num}. [{title}]({fname})")
    else:
        toc_lines.append(f"- [{title}]({fname})")

toc_lines += [
    "",
    "---",
    "",
    "Start here: [How to use this book](00-how-to-use.md) → [Chapter 1](01-the-man-who-woke-up.md)",
    "",
]
(out / "README.md").write_text("\n".join(toc_lines), encoding="utf-8")

# Replace the single-file book with a pointer
src.write_text(
    "# Path to Enlightenment\n\n"
    "This book is arranged **chapter by chapter** in the folder:\n\n"
    "[Path to Enlightenment/](Path%20to%20Enlightenment/README.md)\n\n"
    "Open `Path to Enlightenment/README.md` and read one chapter file at a time.\n",
    encoding="utf-8",
)

print("Wrote", len(entries), "chapter files + README")
for e in entries:
    print(" ", e[0])

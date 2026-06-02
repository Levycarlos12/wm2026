from pathlib import Path
files = ['index.html','login.html','Spielplan.html','info.html','Quiz.html']
replacements = {
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css': '',
    '<i class="fa-solid fa-bars" aria-hidden="true"></i>': '<span class="icon">☰</span>',
    '<i class="fa-solid fa-ticket" aria-hidden="true"></i>': '<span class="icon">🎫</span>',
    '<i class="fa-solid fa-ticket"></i>': '<span class="icon">🎫</span>',
    '<i class="fa-regular fa-circle-play" aria-hidden="true"></i>': '<span class="icon">▶</span>',
    '<i class="fa-regular fa-calendar-days"></i>': '<span class="icon">📅</span>',
    '<i class="fa-solid fa-map-pin" aria-hidden="true"></i>': '<span class="icon">📍</span>',
    '<i class="fa-solid fa-bag-shopping"></i>': '<span class="icon">🛍️</span>',
    '<i class="fa-solid fa-right-to-bracket"></i>': '<span class="icon">🔑</span>',
    '<i class="fa-regular fa-clock" aria-hidden="true"></i>': '<span class="icon">🕒</span>',
}
for name in files:
    path = Path(name)
    if not path.exists():
        print(f"skip {name}")
        continue
    text = path.read_text(encoding='utf-8')
    for old, new in replacements.items():
        text = text.replace(old, new)
    lines = [line for line in text.splitlines() if not ('link rel="stylesheet"' in line and 'cdnjs.cloudflare.com' in line)]
    path.write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print(f"updated {name}")

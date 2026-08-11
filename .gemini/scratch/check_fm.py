import os
import re

dirs = ["Campagnes/PJs", "Campagnes/Sables_et_Éclats_d’Étoile", "Production/Sables_et_Éclats_d’Étoile"]
md_files = []
for d in dirs:
    for root, _, files in os.walk(d):
        for f in files:
            if f.endswith(".md"):
                md_files.append(os.path.join(root, f))

missing_ai = []
missing_status = []
no_frontmatter = []

for fpath in md_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fm_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if fm_match:
        fm = fm_match.group(1)
        if 'ai-first:' not in fm:
            missing_ai.append(fpath)
        if 'status:' not in fm:
            missing_status.append(fpath)
    else:
        no_frontmatter.append(fpath)

print(f"Total MD files: {len(md_files)}")
print(f"Missing ai-first: {len(missing_ai)}")
print(f"Missing status: {len(missing_status)}")
print(f"No frontmatter: {len(no_frontmatter)}")

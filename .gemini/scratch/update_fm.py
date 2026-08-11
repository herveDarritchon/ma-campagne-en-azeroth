import os

dirs = ["Campagnes/PJs", "Campagnes/Sables_et_Éclats_d’Étoile", "Production"]
md_files = []
for d in dirs:
    if not os.path.exists(d): continue
    for root, _, files in os.walk(d):
        for f in files:
            if f.endswith(".md"):
                md_files.append(os.path.join(root, f))

count_modified = 0

for fpath in md_files:
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        continue
    
    modified = False
    
    if content.startswith('---\n') or content.startswith('---\r\n'):
        # Find next ---
        end_idx = content.find('\n---', 3)
        if end_idx != -1:
            # We found the end of frontmatter
            fm = content[4:end_idx]
            body = content[end_idx:] # starts with \n---
            
            lines = fm.split('\n')
            has_ai = any(l.startswith('ai-first:') for l in lines)
            has_status = any(l.startswith('status:') for l in lines)
            
            if not has_ai:
                fm += '\nai-first: true'
                modified = True
            if not has_status:
                fm += '\nstatus: brouillon'
                modified = True
                
            if modified:
                new_content = f"---\n{fm}{body}"
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count_modified += 1
    else:
        # No frontmatter, create one
        new_content = f"---\nai-first: true\nstatus: brouillon\n---\n{content}"
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count_modified += 1

print(f"Modified {count_modified} files.")

---
type: note
date: 2026-08-08
tags: []
ai-first: true
---
# Log Pointer

This file is a pointer to the actual logs directory.

The vault operations log is stored in the `Logs/` directory. Each day has its own file named `YYYY-MM-DD.md`.

Do **NOT** put log entries in this file itself. Append them to today's log file in `Logs/`.

### Entry Template

```markdown
---
type: log
date: YYYY-MM-DD
ai-first: true
---

## Log Entries

**HH:MM** - [Action] | [Description]
```
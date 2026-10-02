#!/bin/bash
# Installs the tools the video-ad-editor skill needs in cloud sessions.
[ "$CLAUDE_CODE_REMOTE" = "true" ] || exit 0
SKILL="$CLAUDE_PROJECT_DIR/.claude/skills/video-ad-editor"
CHROME="$(ls -d /opt/pw-browsers/chromium-*/chrome-linux/chrome 2>/dev/null | head -1)"
if [ -n "$CHROME" ] && [ -n "$CLAUDE_ENV_FILE" ]; then
  echo "export CHROME_PATH=\"$CHROME\"" >> "$CLAUDE_ENV_FILE"
fi
CHROME_PATH="$CHROME" bash "$SKILL/scripts/00_setup.sh" --install >/dev/null 2>&1
exit 0

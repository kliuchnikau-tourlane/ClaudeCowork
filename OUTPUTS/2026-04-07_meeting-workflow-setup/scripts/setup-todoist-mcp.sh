#!/bin/bash
# Setup Todoist MCP server in Claude Desktop config.
# Run once: bash ~/Projects/ClaudeCowork/OUTPUTS/2026-04-07_meeting-workflow-setup/scripts/setup-todoist-mcp.sh

CONFIG_FILE="$HOME/Library/Application Support/Claude/claude_desktop_config.json"

if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: Claude Desktop config not found at $CONFIG_FILE"
    exit 1
fi

echo "Enter your Todoist API token (from todoist.com/app/settings/integrations/developer):"
read -r TOKEN

if [ -z "$TOKEN" ]; then
    echo "Error: No token provided."
    exit 1
fi

# Use python3 to safely merge the mcpServers into existing config
python3 -c "
import json, sys

token = sys.argv[1]
config_path = sys.argv[2]

with open(config_path, 'r') as f:
    config = json.load(f)

config.setdefault('mcpServers', {})
config['mcpServers']['todoist'] = {
    'command': 'npx',
    'args': ['-y', '@greirson/mcp-todoist'],
    'env': {
        'TODOIST_API_TOKEN': token
    }
}

with open(config_path, 'w') as f:
    json.dump(config, f, indent=2)

print('Done! Config updated:')
print(json.dumps(config, indent=2))
" "$TOKEN" "$CONFIG_FILE"

echo ""
echo "Now restart Claude Desktop (Cmd+Q, then reopen) for the Todoist MCP to take effect."

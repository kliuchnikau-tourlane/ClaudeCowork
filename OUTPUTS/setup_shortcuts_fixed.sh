#!/bin/bash

# =============================================================================
# macOS App Focus Shortcuts Setup (FIXED)
# =============================================================================
# Creates 4 Automator Quick Actions that bring apps to the front.
#
# Shortcuts configured:
#   CMD+F1 → Google Chrome
#   CMD+F2 → iTerm2
#   CMD+F3 → Claude
#   CMD+F4 → Obsidian
#
# MANUAL STEPS REQUIRED:
# 1. System Settings → Keyboard → Keyboard Shortcuts → Services → General
#    Assign shortcuts to each "Focus ..." service.
# 2. If shortcuts don't appear, log out/in or run: /System/Library/CoreServices/pbs -update
# =============================================================================

SERVICES_DIR="$HOME/Library/Services"
mkdir -p "$SERVICES_DIR"

create_quick_action() {
  local name="$1"
  local app="$2"
  local workflow_dir="$SERVICES_DIR/${name}.workflow/Contents"

  mkdir -p "$workflow_dir"

  local input_uuid=$(uuidgen)
  local output_uuid=$(uuidgen)
  local action_uuid=$(uuidgen)

  cat > "$workflow_dir/document.wflow" << WFLOW
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>AMApplicationBuild</key>
	<string>521.1</string>
	<key>AMApplicationVersion</key>
	<string>2.10</string>
	<key>AMDocumentVersion</key>
	<string>2</string>
	<key>actions</key>
	<array>
		<dict>
			<key>action</key>
			<dict>
				<key>AMAccepts</key>
				<dict>
					<key>Container</key>
					<string>List</string>
					<key>Optional</key>
					<true/>
					<key>Types</key>
					<array/>
				</dict>
				<key>AMActionVersion</key>
				<string>1.0.2</string>
				<key>AMApplication</key>
				<array/>
				<key>AMParameterProperties</key>
				<dict>
					<key>source</key>
					<dict/>
				</dict>
				<key>AMProvides</key>
				<dict>
					<key>Container</key>
					<string>List</string>
					<key>Types</key>
					<array>
						<string>com.apple.cocoa.string</string>
					</array>
				</dict>
				<key>ActionBundlePath</key>
				<string>/System/Library/Automator/Run AppleScript.action</string>
				<key>ActionName</key>
				<string>Run AppleScript</string>
				<key>ActionParameters</key>
				<dict>
					<key>source</key>
					<string>on run {input, parameters}
    tell application "${app}" to activate
    return input
end run</string>
				</dict>
				<key>BundleIdentifier</key>
				<string>com.apple.automator.runscript</string>
				<key>CFBundleVersion</key>
				<string>1.0.2</string>
				<key>CanShowSelectedItemsWhenRun</key>
				<false/>
				<key>CanShowWhenRun</key>
				<false/>
				<key>Category</key>
				<array>
					<string>AMCategoryUtilities</string>
				</array>
				<key>Class Name</key>
				<string>RunScriptAction</string>
				<key>InputUUID</key>
				<string>${input_uuid}</string>
				<key>Keywords</key>
				<array>
					<string>AppleScript</string>
				</array>
				<key>OutputUUID</key>
				<string>${output_uuid}</string>
				<key>UUID</key>
				<string>${action_uuid}</string>
				<key>UnlockTimeout</key>
				<integer>0</integer>
				<key>arguments</key>
				<dict/>
				<key>isViewVisible</key>
				<integer>1</integer>
				<key>location</key>
				<string>309.5:153.00000000000000</string>
				<key>nibPath</key>
				<string>/System/Library/Automator/Run AppleScript.action/Contents/Resources/English.lproj/main.nib</string>
			</dict>
			<key>isViewVisible</key>
			<integer>1</integer>
		</dict>
	</array>
	<key>connectors</key>
	<dict/>
	<key>workflowMetaData</key>
	<dict>
		<key>serviceInputTypeIdentifier</key>
		<string>com.apple.Automator.nothing</string>
		<key>serviceProcessesInput</key>
		<integer>0</integer>
		<key>workflowTypeIdentifier</key>
		<string>com.apple.Automator.servicesMenu</string>
	</dict>
</dict>
</plist>
WFLOW

  echo "✓ Created: ${name}.workflow"
}

echo "Creating Quick Action workflows in $SERVICES_DIR..."
echo ""

create_quick_action "Focus Chrome"   "Google Chrome"
create_quick_action "Focus iTerm2"   "iTerm2"
create_quick_action "Focus Claude"   "Claude"
create_quick_action "Focus Obsidian" "Obsidian"

echo ""
echo "Refreshing macOS Services menu..."
/System/Library/CoreServices/pbs -update 2>/dev/null && echo "✓ Services menu refreshed" || echo "⚠ Could not refresh automatically — log out and back in if shortcuts don't appear"

echo ""
echo "========================================"
echo "Done! Now do the manual step:"
echo "System Settings → Keyboard → Keyboard Shortcuts → Services → General"
echo "Assign: Focus Chrome=CMD+F1, Focus iTerm2=CMD+F2, Focus Claude=CMD+F3, Focus Obsidian=CMD+F4"
echo "========================================"

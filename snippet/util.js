[
  {
    label: 'dc-connect',
    insertText: `
# Connect and Login into a vCenter server
$viServer = Connect-VIServer -Server {{vCenter-FQDN-IP}} -User {{username}} -Password {{password}}

# Get something done here. Type dc for more code below


# Disconnect and logout all servers - important to release resources
# Use * for all the existing connections to all vCenter/ESX/ESXi servers
Disconnect-VIServer -Server $viServer -Confirm:$False
`,
    documentation: 'Connect to a vCenter server or ESX/ESXi server'
  }
]

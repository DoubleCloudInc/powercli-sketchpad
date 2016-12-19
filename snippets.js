[
  {
    label: 'if',
    insertText: `
if({{condition}}) {
  {{}}
}
`,
    documentation: 'If Statement'
  }
  ,

  {
    label: 'ifelse',
    insertText: `
if({{condition}}) {
  {{do-something-for-true}}
} else {
  {{{{do-something-for-false}}}}
}
`,
    documentation: 'If-Else Statement'
  }
  ,

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

  ,
  {
    label: 'dc-server-get-time',
    insertText: `
$si = Get-View ServiceInstance
$si.CurrentTime()
`,
    documentation: 'Retrieve the current server time from vCenter or ESX/ESXi server'
  }

  ,
  {
    label: 'dc-vm-new',
    insertText: `
$hostToRun = Get-VMHost -Name {{host-name}}
New-VM -Name {{new-vm-name}} -ResourcePool $hostToRun -Datastore {{datastore-name}} -NumCPU 2 -MemoryGB {{4}} -DiskGB {{40}} -NetworkName "{{VM Network}}" -Floppy -CD -DiskStorageFormat {{Thin}} -GuestID {{winNetDatacenterGuest}}
`,
    documentation: 'Create a new virtual machine on a named host and datastore with guestID'
  }

  ,

  {
    label: 'dc-vm-get-by-name',
    insertText: `Get-VM -Name {{vm-name}}`,
    documentation: 'Create a new virtual machine'
  }
  ,

  {
    label: 'dc-vm-get-by-resource-pool',
    insertText: `Get-VM -Location {{resource-pool-name}}`,
    documentation: 'Get VMs in the nameed resource pool - contributed by DoubleCloud Inc.'
  }
  ,

  {
    label: 'dc-vm-start',
    insertText: `Get-VM -Name {{vm-name}} | Start-VM {{-Confirm:$False}} {{-RunAsync:$True}}`,
    documentation: 'Create a new virtual machine'
  }
  ,  

  {
    label: 'dc-vm-stop',
    insertText: `Get-VM -Name {{vm-name}} | Stop-VM -Confirm:$False`,
    documentation: 'Stop VMs by name or name pattern with *'
  }
  ,

  {
    label: 'dc-vm-suspend',
    insertText: `Get-VM -Name {{vm-name}} | Suspend-VM -Confirm:$False`,
    documentation: 'Suspend VMs by name or name pattern with *'
  }
  ,

  {
    label: 'dc-vm-convert-to-template',
    insertText: `Get-VM -Name {{vm-name}} | Set-VM -ToTemplate -Name {{template-name}}`,
    documentation: 'Convert a VM to template'
  }
  ,

  {
    label: 'dc-vm-set-mem-cpu',
    insertText: `Set-VM -MemoryGB {{memoryInGB}} -NumCPU {{no-of-cpu}}`,
    documentation: 'Change VM memory and/or CPUs'
  }
  ,

  {
    label: 'dc-vm-upgrade-hardware-version',
    insertText: `Set-VM -VM {{vm-variable}} -Version {{v7}}`,
    documentation: 'Upgrade VM hardware version'
  }
  ,

  {
    label: 'dc-vm-change-name-description-guestid',
    insertText: `Set-VM $vm -Name {{vm-name}} -GuestID {{winNetStandardGuest}} -Description "{{description-for-the-vm(s)}}"`,
    documentation: 'Change VM name, description, guestID'
  }
  ,

  {
    label: 'dc-vm-snapshot-revert',
    insertText: `
$snapshot = Get-Snapshot -VM {{$vm}} -Name "{{snapshot-name-revert-to}}"
Set-VM -VM {{$vm}} -Snapshot $snapshot
`,
    documentation: 'Revert the VM to the named snapshot'
  }

]

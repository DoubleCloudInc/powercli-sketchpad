# Sketchpad for VMware PowerCLI

This is the repository for the Powercli SketchPad, which empowers VMware administrators to create high quality scripts with least effort by picking the code snippets and samples, and quickly tabbing through to customize them.

This is the easiest and quickest way to get your script done.

## Live Site
To use the PowerCLI SketchPad, simply visit: [HERE](https://doublecloudinc.github.io/powercli-sketchpad/).

Note: although running in your browser, your code does not go back to the server. **It starts at local and remain so all the time.**

Click on the following image for Youtube Video in 26 seconds.
<a href="http://www.youtube.com/watch?feature=player_embedded&v=UDgxj4IIB5M
" target="_blank"><img src="http://img.youtube.com/vi/UDgxj4IIB5M/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="600" height="400" border="10" /></a>


## How to Contribute - Much Easier than Anyone would Expect

We welcome all the contributions. It's VERY easy to share a code snippet with the community. All you need to do is to send us a simple code snippet that look like the following:

```javascript
{
  label: 'dc-vm-start',
  insertText: `Get-VM -Name {{vm-name}} | Start-VM {{-Confirm:$False}} {{-RunAsync:$True}}`,
  documentation: 'Create a new virtual machine - by DoubleCloud Inc.'
} 
```

The *label* is used by the PowerCLI SketchPad to decide whether to show this code snippet while the users are typing. As a naming convention, we suggest to go with the object oriented way. In other words, have an object type goes first before the actions. The object type name or abbreviations include vm, host, rp (rource pool), cluster, folder, etc. This convention is mainly for naming consistency. The editor will match the snippet whenever the users type in any substrings, for example, start.

As its name suggests, the *insertText* is the code the editor will insert into the editor after users select the snippet. Notice the double curly brackets there. They are used to highlight the parts of the snippets that users should change right after by tabbing through each one of them. When creating your snippets, please carefully identify those common parameters that users want to change.

If you have long snippet, please use the ` charactor to wrap the code. In so doing, you can simply write the snippet just like they are in your editor without dealing with many '\n' and '\t' which can really make the code look messy.

The last part is the *documentation*, a short description for your code snippet. Please feel free to include your Twitter handler or your company name.

That is it. Ready to write your first code snippet?

## Where to Start
You can either use git as normal, or simply use this No.1 issue to share your code: https://github.com/DoubleCloudInc/powercli-sketchpad/issues/1

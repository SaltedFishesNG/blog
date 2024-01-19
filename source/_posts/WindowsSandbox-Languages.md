---
title: Windows Sandbox配置启动时默认语言
tag:
  - Windows Sandbox
categories: Windows
excerpt: 通过修改Windows Sandbox的注册表以达到Windows Sandbox启动时默认语言为zh-CN的效果
date: 2023-06-18
# updated: 
# pinned: 
comments: true
# highlight: true
# secret: ""
# math: true
---
不知道为什么某一次系统更新之后Windows沙盒的默认语言变成了en-US，于是就有了这篇文章。

## 1.准备工作

Windows Sandbox的磁盘目录在`C:\ProgramData\Microsoft\Windows\Containers\BaseImages\ <这里是uuid，理论上每个人都不一样> \BaseLayer\Files`中。

<details>
  <summary>不知道uuid？</summary><blockquote>
  有没有一种可能，就是<code>C:\ProgramData\Microsoft\Windows\Containers\BaseImages\</code>这个目录下只有一个文件夹，而这个文件夹的名字就是uuid命名的
</blockquote></details>

而想要修改启动时默认语言需要修改此目录中`\Users\WDAGUtilityAccount\ntuser.dat`这个注册表文件（注意：此文件是隐藏文件，需要打开显示隐藏的项目）

将这个文件复制到其他你能找到的位置中

## 2.修改注册表

打开注册表编辑器，选中节点`计算机\HKEY_USERS`，点击文件选项卡中的加载配置单元
![注册表文件选项卡](/images/WindowsSandbox-Languages/1.webp)
选择刚才复制的文件，并随便输入一个项目名（这里我输入的是wwwwwwwwwww）

选择目录`计算机\HKEY_USERS\ <你刚才输入的项目名> \Control Panel\Desktop`，在右侧找到`PreferredUILanguagesPending`和`PreviousPreferredUILanguages`并其值修改为`zh-CN`
![修改注册表的值以及文件位置](/images/WindowsSandbox-Languages/2.png)

## 3.完成修改

最后再选择目录`计算机\HKEY_USERS\ <你刚才输入的项目名>`并点击文件选项卡中的卸载配置单元

再将修改好的文件替换回原来的位置`C:\ProgramData\Microsoft\Windows\Containers\BaseImages\ <这里是uuid，理论上每个人都不一样> \BaseLayer\Files\Users\WDAGUtilityAccount`即可完成修改

## 4.最后

当然还可以修改些其他内容，例如修改磁盘目录文件使其开机就自带一些文件或者软件（例如7-zip）

# 研究方向与论文维护

Lab 导航仍保持关闭；本功能不需要启用导航才能维护。

## 修改研究方向卡片

编辑 `_data/research.yml`：

- `id`：关联论文的固定标识，尽量不改。
- `title`、`description`：显示名称与描述，可以自由修改。
- `image`：图片路径，例如 `/images/research/sensing.jpg`。将图片放到对应目录；留空时显示图标，不会生成空图片链接。
- `icon`：图片留空时使用的现有 Font Awesome 图标名称。
- 调整条目顺序即可调整卡片顺序，新增或删除条目无需编辑 HTML。

图片区域统一为 16:9，完整显示图片，适合带文字的研究示意图。

## 给论文分类

每篇 `_publications/*.md` 文件开头已有注释示例。取消所需行的注释，例如：

```yaml
research:
  - wireless-sensing
  - wireless-security
```

只保留匹配的方向。同一篇论文可以属于多个方向。
当前方向及 ID（按展示顺序）：

- Wireless Sensing & AIoT：`wireless-sensing`
- Mobile Intelligence：`mobile-intelligence`
- Wireless & Mobile Security：`wireless-security`
- Intelligent Vehicular Systems：`vehicular-systems`

未设置、留空或保持注释的论文照常显示在 All publications 中，不进入具体方向。
某方向尚无论文时显示空状态；不存在的方向参数退回全部列表。

## 访问与导航

Lab 卡片自动生成类似 `/publications/?research=wireless-sensing` 的链接。
Publications 顶部按钮可以切换方向，支持分享链接及浏览器前进后退。
禁用 JavaScript 时仍展示全部论文。

准备公开 Lab 时，再取消 `_data/navigation.yml` 中 Lab 导航项的注释。
注意：隐藏导航不会阻止访问 `/Lab/`，也不等同于将页面设为私密。

### 数据库中的字段说明
#### user表

**name**: 用户名
**password**: 密码
**classify**: 分类（用于用户访问后台管理系统权限，admin全部权限，editor部分权限）

```mysql
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL COMMENT '用户名',
  `password` text NOT NULL COMMENT '密码',
  `classify` varchar(255) DEFAULT '' COMMENT '分类，后台控权字段，admin全部权限，editor部分权限',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8
```



#### newarticle表  (文章管理表)

**title**: 文章标题
**content**: 文章内容
**status**: 控制当前文章是否显示在首页中（0不显示，1显示）

**author**:作者

**scan_time**: 当前文章浏览次数

**create_time**: 文章创建时间

**synopsis**: 文章简介

```mysql
CREATE TABLE `newarticle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '文章标题',
  `content` text COMMENT '文章内容',
  `status` int(11) DEFAULT NULL COMMENT '控制当前文章是否显示在首页中（0不显示，1显示）',
  `author` varchar(255) DEFAULT NULL COMMENT '作者',
  `scan_time` int(11) DEFAULT NULL COMMENT ' 当前文章浏览次数',
  `create_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '文章创建时间',
  `synopsis` text COMMENT '文章简介',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;


```



scaninfo 不能为空，必须创建一条记录

```mysql
CREATE TABLE `scaninfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scan_time` int(11) DEFAULT NULL COMMENT '总浏览次数',
  `day_scan_time` int(11) DEFAULT NULL COMMENT '今日浏览次数',
  `mobile` int(255) DEFAULT NULL COMMENT '移动设备访问次数',
  `apple` int(11) DEFAULT NULL COMMENT '苹果设备访问次数',
  `android` int(11) DEFAULT NULL COMMENT '安卓设备访问次数',
  `pc` int(255) DEFAULT NULL COMMENT 'pc设备访问次数',
  `ie` int(11) DEFAULT NULL COMMENT '其他设备访问次数',
  `chrome` int(11) DEFAULT NULL COMMENT 'chrome设备访问次数',
  `opera` int(11) DEFAULT NULL COMMENT 'opera设备访问次数',
  `safari` int(11) DEFAULT NULL COMMENT 'safari设备访问次数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

```



ipinfo

```mysql
CREATE TABLE `ipinfo` (
  `ipaddress` varchar(255) NOT NULL DEFAULT '' COMMENT '访问博客的ip地址，是为了统计浏览次数，同一ip,24小时内访问网站只记录访问一次',
  `atime` timestamp NULL DEFAULT NULL COMMENT '访问时间',
  PRIMARY KEY (`ipaddress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```





dayscancreatetime

```mysql
CREATE TABLE `dayscancreatetime` (
  `id` int(11) NOT NULL,
  `day_scan_create_time` date DEFAULT NULL COMMENT '记录上次访问时创建的时间，(为了模拟每天都会清空当天访问次数数据库中的数据）无论是哪个ip只要访问博客页面，会拿访问时的时间和这个时间比较，如果不是今天则将今日访问次数变为1，后台访问变为0，时间更改为今天，如果是今天，则不执行此操作',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```


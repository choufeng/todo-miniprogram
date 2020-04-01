# addHabit

用于增加习惯数据。

## 参数

```

data: {
  name: '',
  description: '',
  count: 0,
  lastCountTime: ''
}
```

## 业务流程

1. 得到数据
2. 检查是否重复， 重复的，返回重复数据， 不重复的， 创建， 返回数据。

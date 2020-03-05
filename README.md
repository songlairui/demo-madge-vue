# madge vue

> demo for [gist.github/287eaac29cda6...](https://gist.github.com/songlairui/287eaac29cda65cd5f1f7471b6661503)

> 追踪vue 项目, 文件依赖关系

使用不规范的方法修改 precinct 方法使得 madge 能够识别vue文件

## 运行效果

```bash
~/Playing/play-madge(master ✔) node .
{ 'data.js': [], 'play.js': [ 'data.js' ] }
{ 'data.es.js': [], 'play.es.js': [ 'data.es.js' ] }
{
  'App.vue': [ 'Second.vue' ],
  'End.vue': [],
  'Next.vue': [ 'End.vue' ],
  'Second.vue': [ 'Next.vue' ]
}
```


## Thanks to

- https://github.com/pahen/madge/issues/122#issuecomment-315992568
- https://github.com/dependents/node-precinct

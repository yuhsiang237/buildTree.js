# buildTree.js
建立樹狀階層結構

### 階層轉換
轉換前:
```
const sidebarList = [
     { number: 1, parent_number: null, title: '基本管理'},
     { number: 2, parent_number: null, title: '系統管理' },
     { number: 3, parent_number: 2 ,title: '使用者管理' },
     { number: 4, parent_number: 3 ,title: '權限管理' },
     { number: 5, parent_number: 3 ,title: '帳號管理' }
]
```
轉換後:
```
[{
    "number": 1,
    "parent_number": null,
    "title": "基本管理",
    "children": []
}, {
    "number": 2,
    "parent_number": null,
    "title": "系統管理",
    "children": [{
        "number": 3,
        "parent_number": 2,
        "title": "使用者管理",
        "children": [{
            "number": 4,
            "parent_number": 3,
            "title": "權限管理",
            "children": []
        }, {
            "number": 5,
            "parent_number": 3,
            "title": "帳號管理",
            "children": []
        }]
    }]
}]
```

### 使用方法
1.引入buildTree.js
```
<script src="buildTree.js"></script>
```
2.實作
```
const sidebarList = [
     { number: 1, parent_number: null, title: '基本管理'},
     { number: 2, parent_number: null, title: '系統管理' },
     { number: 3, parent_number: 2 ,title: '使用者管理' },
     { number: 4, parent_number: 3 ,title: '權限管理' },
     { number: 5, parent_number: 3 ,title: '帳號管理' }
]

const tree = buildTree({
    data:sidebarList,
    id:'number', // PK
    parent_id:'parent_number' // FK
})
```


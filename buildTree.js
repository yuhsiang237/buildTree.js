// 將格式轉成樹狀結構
// const sidebarList = [
//     { number: 1, parent_number: null, title: '基本管理'},
//     { number: 2, parent_number: null, title: '系統管理' },
//     { number: 3, parent_number: 2 ,title: '使用者管理' },
//     { number: 4, parent_number: 3 ,title: '權限管理' },
//     { number: 5, parent_number: 3 ,title: '帳號管理' }
// ]
//
// const tree = buildTree({
//     data:sidebarList,
//     id:'number', // PK
//     parent_id:'parent_number' // FK
// })
//
//
// //結果:
// [{
//     "number": 1,
//     "parent_number": null,
//     "title": "基本管理",
//     "children": []
// }, {
//     "number": 2,
//     "parent_number": null,
//     "title": "系統管理",
//     "children": [{
//         "number": 3,
//         "parent_number": 2,
//         "title": "使用者管理",
//         "children": [{
//             "number": 4,
//             "parent_number": 3,
//             "title": "權限管理",
//             "children": []
//         }, {
//             "number": 5,
//             "parent_number": 3,
//             "title": "帳號管理",
//             "children": []
//         }]
//     }]
// }]



// 建立樹狀階層
function buildTree({
data,id,parent_id
}) {
    // 根節點
    const rootNode = data.filter(it => it[parent_id] === null)
    // 增加子節點
    return addNode(rootNode, data,id,parent_id)
}

// 添加子節點
function addNode(children, data,id,parent_id) {
    // 找不到子節點返回
    if (children.length === 0) {
        return []
    }
    // 添加子節點
    const arr = []
    // 遍歷當前children節點
    for (let i = 0; i < children.length; i++) {
        // 查詢底下的子節點
        const childrenNode = data.filter(it =>
            it[parent_id] === children[i][id])
        // 把底下子節點添加進陣列
        arr.push({
            ...children[i],
            children: addNode(childrenNode, data,id,parent_id)
        })
    }
    // 返回子節點陣列
    return arr
}
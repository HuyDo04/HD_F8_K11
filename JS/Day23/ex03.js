// const data = [
//     { id: 1, name: "Chuyên mục 1", parent: 0 },
//     { id: 2, name: "Chuyên mục 2", parent: 0 },
//     { id: 3, name: "Chuyên mục 3", parent: 0 },
//     { id: 4, name: "Chuyên mục 2.1", parent: 2 },
//     { id: 5, name: "Chuyên mục 2.2", parent: 2 },
//     { id: 6, name: "Chuyên mục 2.3", parent: 2 },
//     { id: 7, name: "Chuyên mục 3.1", parent: 3 },
//     { id: 8, name: "Chuyên mục 3.2", parent: 3 },
//     { id: 9, name: "Chuyên mục 3.3", parent: 3 },
//     { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
//     { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
//   ];
  
//   // Hàm chuyển đổi
//   function buildNestedArray(items) {
//     const map = {}; // Để lưu các mục theo id
//     const roots = []; // Lưu các phần tử gốc
  
//     // Tạo map
//     items.forEach((item) => {
//       map[item.id] = { ...item, children: [] };
//     });
  
//     // Duyệt qua danh sách để xây dựng cấu trúc lồng
//     items.forEach((item) => {
//       if (item.parent === 0) {
//         roots.push(map[item.id]); // Thêm vào danh sách gốc
//       } else if (map[item.parent]) {
//         map[item.parent].children.push(map[item.id]); // Thêm vào children của phần tử cha
//       }
//     });
  
//     return roots;
//   }
  
//   // Gọi hàm và in kết quả
//   const categories = buildNestedArray(data);
//   console.log(JSON.stringify(categories, null, 2));

const categories = [
	{
		id: 1,
		name: "Chuyên mục 1",
		parent: 0,
	},
	{
		id: 2,
		name: "Chuyên mục 2",
		parent: 0,
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		parent: 0,
	},
	{
		id: 4,
		name: "Chuyên mục 2.1",
		parent: 2,
	},
	{
		id: 5,
		name: "Chuyên mục 2.2",
		parent: 2,
	},
	{
		id: 6,
		name: "Chuyên mục 2.3",
		parent: 2,
	},
	{
		id: 7,
		name: "Chuyên mục 3.1",
		parent: 3,
	},
	{
		id: 8,
		name: "Chuyên mục 3.2",
		parent: 3,
	},
	{
		id: 9,
		name: "Chuyên mục 3.3",
		parent: 3,
	},
	{
		id: 10,
		name: "Chuyên mục 2.2.1",
		parent: 5,
	},
	{
		id: 11,
		name: "Chuyên mục 2.2.2",
		parent: 5,
	},
];

function flattenCategories(categories) {
    const result = [];
    const obj = {};
    categories.forEach((item) => {
        obj[item.id] = { ...item, children: [] };
    });

    categories.forEach(item => {
        if(item.parent === 0) {
            result.push(obj[item.id])
            console.log(result.push(obj[item.id]))
        } else if (obj[item.parent]) {
            console.log(obj[item.parent].children)
        obj[item.parent].children.push(obj[item.id])
        }
    })
   
    return result;
}

console.log(flattenCategories(categories));


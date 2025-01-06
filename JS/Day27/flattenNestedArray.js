const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];

function flattenCategories(arr) {  
    if(!Array.isArray(arr) || arr.length === 0) {
        return `Khong hop le`;
    }
	const result = [];  
	const cur = [{ items: arr, parentId: 0 }]; 
   
	for (let i = 0; i < cur.length; i++) {  
		const { items, parentId } = cur[i];  

		for (const item of items) {  
			
			result.push({ id: item.id, name: item.name, parentId });  
		  
			if (item.children) {  
				cur.push({ items: item.children, parentId: item.id });  
			}  
		}  
	}  
    result.sort((a, b) => a.id - b.id);
	return result;  
}  

const flatCategories = flattenCategories(categories);  
console.log(flatCategories);  

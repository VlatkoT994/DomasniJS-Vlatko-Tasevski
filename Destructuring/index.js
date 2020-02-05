let o = {
	"image1": {"src": "http://url/image1.png"},
	"image2": {"src": "http://url/image2.png"},
    "image3": {"src": "http://url/image3.png"},
}
const reverse = ({image1:{src:img1}, image2:{src:img2},image3:{src:img3}}) => {
    return {
        "src": {
                "image1":img1,
                "image2":img2,
                "image3":img3
                }
    }
}
let reversed = reverse(o)
const toArr = ({image1:{src:img1}, image2:{src:img2},image3:{src:img3}}) => [img1,img2,img3]
let arr = toArr(o)
let [firstUrl] = arr;
console.log(firstUrl)
import { API } from "../config";

//  tO get all all categories

export const getAllCategory = () => {
    return fetch(`${API}/getallcategories`)
        // Backend bata aako response lai leera json ma convert garnu paryo
        .then(res => res.json())
        // error aako xa vhane , catch garera console ma log garnu paryo
        .catch(err => console.log(err))
}

// add category


//  authencate hunuparxa add garna so token bata authencate garera category name add garne 
// token pass garera authencate pachi cagtegory add garne 
export const addCategory = (category_name, token) => {
    // category Object-back end ma yo object pass hunxa

    // let category_name = {category_name}
    // front end bata request .,body .category_name pass hunu paryo
    return fetch(`${API}/addcategory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ category_name })
        // body ma json  
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}
// get category details(D1)
// BackEnd sanga connect garne function
export const getCategoryDetails = (id) => {
    return fetch(`${API}/categorydetail/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
    // yaslai aab EditCategory bata Call garnu paryo==kaile garne ta? Page load hune bela===use effect ma call garne 

}

// Update Category
export const updatecategory = (id, category_name, token) => {
    // category Object-back end ma yo object pass hunxa

    let category = { category_name } /*yo object ho*/

    return fetch(`${API}/updatecategory/${id}`, { /*url updatecategory hunu paryo ani k lai change garne a(id)*/
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` /*authorization m abearer Token pass garyo*/
        },
        // backEnd bata update vhyo =(category pathayo)
        body: JSON.stringify(category) /*category fill update hunxa*/

    })
        .then(res => res.json()) /*response aauxa thyo checkgarera */
        .catch(err => console.log(err))
    // Aba UpdateCategory ma Update category  banaune handlesubmit ma
}



// delete category ko lagi
export const deleteCategory = (id, token) => {
    return fetch(`${API}/deletecategory/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json()) /*response aauxa thyo checkgarera */
        .catch(err => console.log(err))
}
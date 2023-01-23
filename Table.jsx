import "./input.css"
// import {SignupForm}from "./Form1"
import {useNavigate} from "react-router-dom";

export default function Table()
{
    const navigate = useNavigate()

    function onAddClicked() {
        console.log('Naviagte')
        navigate('/Form1')
    }

return  (
 



<div class="relative overflow-x-auto shadow-md sm:rounded-lg place-content-center ">

<h1 class=" font-sansbold ml-5 mt-4  text-3xl "> Resource Listing</h1>
<button class=" float-right	mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-lg" onClick={onAddClicked }> Add </button>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-10">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Resource name
                </th>
                <th scope="col" class="px-6 py-3">
                Resource ID
                </th>
                <th scope="col" class="px-6 py-3">
                Type
                </th>
                <th scope="col" class="px-6 py-3">
                Ceiling
                </th>
                <th scope="col" class="px-6 py-3">
                Floor
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Credits
                </th>
                <td class="px-6 py-4">
                123
                </td>
                <td class="px-6 py-4">
                Grant
                </td>
                <td class="px-6 py-4">
                -100
                </td>
                <td class="px-6 py-4 ">
                0
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                US Dollars
                </th>
                <td class="px-6 py-4">
                870
                </td>
                <td class="px-6 py-4">
                Charge
                </td>
                <td class="px-6 py-4">
                100
                </td>
                <td class="px-6 py-4 ">
                0
                </td>
            </tr>
            
        </tbody>
    </table>
</div>








  );
}
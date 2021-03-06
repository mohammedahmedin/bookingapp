import React, {useEffect, useState} from 'react';
import axios from "axios";

function Registration() {

  const intialValue = {
      username:" ",
      email:" ",
      password:""
  }

  const [registerValues, setRegisterValues] = useState(intialValue)

    // onchange ?? 
    
    function handleOnChange(e) {

    //??
    //setRegisterValues({})
 


    setRegisterValues({...registerValues, [e.target.name]: e.target.value})

    }

    function handleOnSubmit(e) {
       e.preventDefault();

       console.log( registerValues.username, registerValues.email)
      const response = axios.post('http://localhost:1337/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
            }).then( (e)=> { console.log(e.data)})



            //console.log(response)
       // vi ska skicka user registration data till strapi /enpoints 
    } 


    // gör så att när användare submit form ska användare få : du är registerat nu meddelandet
    //  conditional rendering. 

   /*  // componentDidMount
    useEffect(() => {
        const registerUser = async () => {
            const response = await axios.post('http://localhost:1337/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
            })
            console.log(response)
        }
       // registerUser()
        const loginUser = async()=> {
          const res=   await axios
            .post('http://localhost:1337/auth/local', {
              identifier: 'user@strapi.io',
              password: 'strapiPassword',
            })
            console.log("login response" , res)
        }
       // loginUser();
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE5NzcxMTg0LCJleHAiOjE2MjIzNjMxODR9.TlS1oiLpE39bt3BImgdypSlmvwCrBbpb8XLcqGgfjms"
       
    }, [])
 */


    return (
        <div>
            <div class="container max-w-full mx-auto md:py-24 px-6">
  <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-6">
                    <div class="text-center font-semibold text-black">
                    Register User  
                    </div>
                
                    <form class="mt-8" x-data="{password: '',password_confirm: ''}"  onSubmit={handleOnSubmit}>
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Username</span>
                                <input placeholder="" type="text" name="username" value={registerValues.username} onChange={handleOnChange} 
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Email</span>
                                <input placeholder="" type="email" name="email" value={registerValues.email} onChange={handleOnChange}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password</span>
                                <input placeholder="" type="password" x-model="password" name="password" value={registerValues.password} onChange={handleOnChange}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password Confirm</span>
                                <input placeholder="" type="password" x-model="password_confirm"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="flex justify-start mt-3 ml-4 p-1">
                                <ul>
                                    <li class="flex items-center py-1">
                                        
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path x-show="password == password_confirm && password.length > 0" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M5 13l4 4L19 7"/>
                                                <path x-show="password != password_confirm || password.length == 0" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>

                                            </svg>
                                        
                                        
                                    </li>
                                    <li class="flex items-center py-1">
                                        
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path x-show="password.length > 7" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M5 13l4 4L19 7"/>
                                                <path x-show="password.length < 7" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>

                                            </svg>
                                       
                                       
                                    </li>
                                </ul>
                            </div>
                            <div class="flex justify-start">
                                <label class="block text-gray-500 font-bold my-4 flex items-center">
                                    <input class="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    <span class="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                          <a href="#"
                                             class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                           Terms and Conditions of the site
                                          </a>and
                                          <a href="#"
                                             class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                            the information data policy.</a>
                                    </span>
                                </label>
                            </div>
                            <button class="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                Register
                            </button>
                        </div>
                    </form>

                    <div class="text-sm font-semibold block sm:hidden py-6 flex justify-center">
                        <a href="#"
                           class="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500">You're already member?
                            <span class="text-black font-semibold">
            Login
          </span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


        </div>
    )
}

export default Registration
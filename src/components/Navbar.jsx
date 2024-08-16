import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('user');
    navigate('/login')
  }

  return (
    <div
      className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#FF4E88] py-4 shadow-md">
      
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          A-NoteBook
        </div>
      </div>

      <div className="right">
        <ul className="flex space-x-4 text-white justify-center items-center">
          <Link to={'/'}>
          <li className="cursor-pointer">Home</li>
          </Link>
          {user && <li onClick={logout} className="cursor-pointer">logout</li>}

        </ul>
      </div>
    </div>
  );
}

export default Navbar;































// ---------------------------explenation----

// ### 1. **Import Statement**
//    ```javascript
//    import { Link } from "react-router-dom";
//    ```
//    - **Explanation**: Ye line `Link` component ko `react-router-dom` se import kar rahi hai. `Link` ka use hota hai React me page navigation ke liye bina page reload ke.

// ### 2. **Navbar Function**
//    ```javascript
//    function Navbar() {
//    ```
//    - **Explanation**: Yaha ek functional component `Navbar` define ho raha hai jo JSX return karega.

// ### 3. **Return Statement**
//    ```javascript
//    return (
//    ```
//    - **Explanation**: Ye function `Navbar` ke output ko return karega, jo ek JSX structure hoga (HTML-like syntax in React).

// ### 4. **Main Div with Tailwind Classes**
//    ```javascript
//    <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#FF4E88] py-4 shadow-md">
//    ```
//    - **Explanation**: 
//      - **`lg:flex`**: Large screens pe ye div `flexbox` layout use karega.
//      - **`md:flex`**: Medium screens pe bhi `flexbox` layout apply hoga.
//      - **`flex-wrap`**: Flex items ko wrap karne ki permission deta hai agar space kam ho.
//      - **`justify-between`**: Flex items ko horizontally space karega, taaki left aur right me space equal ho.
//      - **`items-center`**: Flex items ko vertically center align karega.
//      - **`px-4`**: Padding left aur right se 1rem (4*4px = 16px) hogi.
//      - **`bg-[#FF4E88]`**: Background color hexadecimal color `#FF4E88` se set ho raha hai.
//      - **`py-4`**: Padding top aur bottom se 1rem hogi.
//      - **`shadow-md`**: Medium shadow apply karega, jo box ke neeche halka shadow effect create karega.

// ### 5. **Left Div**
//    ```javascript
//    <div className="left">
//    ```
//    - **Explanation**: Ye div `left` section ke liye banaya gaya hai, jo logo ko contain karega.

// ### 6. **Logo Div with Tailwind Classes**
//    ```javascript
//    <div className="logo font-bold text-2xl text-white text-center">
//    ```
//    - **Explanation**:
//      - **`font-bold`**: Text bold (700 weight) hoga.
//      - **`text-2xl`**: Font size 2xl (approx 1.5rem).
//      - **`text-white`**: Text color white hoga.
//      - **`text-center`**: Text ko horizontally center align karega.

// ### 7. **Logo Text**
//    ```javascript
//    E-NoteBook
//    ```
//    - **Explanation**: Ye `div` me `E-NoteBook` text render karega jo logo ke roop me hoga.

// ### 8. **Right Div**
//    ```javascript
//    <div className="right">
//    ```
//    - **Explanation**: Ye div `right` section ke liye hai, jo navigation links ko contain karega.

// ### 9. **Unordered List with Tailwind Classes**
//    ```javascript
//    <ul className="flex space-x-4 text-white justify-center items-center">
//    ```
//    - **Explanation**:
//      - **`flex`**: `ul` ko flexbox container banata hai, taaki items horizontal row me ho.
//      - **`space-x-4`**: Flex items ke beech 1rem (16px) ka horizontal gap create karega.
//      - **`text-white`**: List items ka text white hoga.
//      - **`justify-center`**: List items ko horizontally center align karega.
//      - **`items-center`**: List items ko vertically center align karega.

// ### 10. **Link and List Items**
//    ```javascript
//    <Link to={"/"}>
//      <li className="cursor-pointer">Home</li>
//    </Link>
//    ```
//    - **Explanation**: 
//      - **`<Link to={"/"}>`**: `Home` link ke liye `Link` component jo root (`"/"`) page pe navigate karega.
//      - **`<li className="cursor-pointer">Home</li>`**: `li` ko `cursor-pointer` class ke saath banaya gaya hai, jo hover par cursor ko pointer banata hai.

//    Baaki ke `Login` aur `Signup` links bhi isi tarah defined hain, sirf `to` attribute alag hai jo different pages ko target karega.

// ### 11. **Closing Tags**
//    ```javascript
//    </div>
//    );
//    }
//    ```
//    - **Explanation**: Ye sabhi open tags (`div`, `ul`, `li`, etc.) ko close karta hai aur function ka return statement khatam karta hai.

// ### 12. **Export Statement**
//    ```javascript
//    export default Navbar;
//    ```
//    - **Explanation**: Ye line `Navbar` component ko export karti hai taaki aap ise kisi aur file me import karke use kar sakein.


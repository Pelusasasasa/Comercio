import { Route, Routes } from "react-router-dom"
import { ProductoPage } from "../pages"

export const ProductoRouter = () => {
  return (
    <Routes>
        <Route path="/lista" element={ <ProductoPage /> } />
    </Routes>
  )
}

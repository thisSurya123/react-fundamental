import { useState } from "react";

function App() {
  const [filterText, setfiltertext] = useState('');
  const [inStock, setinstock] = useState(false);
  const [addButton, setAddButton] = useState(false);
  return (
    <div className="md:w-3/5 h-3/5 md:m-auto bg-black min-h-screen text-white">

      <div className="bg-gray-500 flex justify-between p-5">
        <h1>Product Information</h1>
      </div>

      <SearchBar 
        stockOnly={setinstock}
        instock={inStock}
        setfiltertext={setfiltertext}
        filterText={filterText} />
      <ProductTable
        product={barang}
        filterText={filterText}
        inStock={inStock}/>
    </div>
  );
}
function AddButton({
  addButton,
  setAddButton
}){
  return(
    <span 
    onClick={setAddButton}
    value={addButton}>
      ADD
      </span>
  );
}
function AddStock({addButton}){
  return(
    <div className="bg-white text-black">
      <h1>Tambahkan Stock</h1>
    </div>
  );
}
function SearchBar({
  stockOnly,
  inStock,
  filterText,
  setfiltertext}){
  return(
    <div className="p-2">
        <div className="mb-5">
          <input className="w-full text-center p-2 bg-gray-900" 
            type="text"
            value={filterText} 
            onChange={(e) => setfiltertext(e.target.value)}
            placeholder="Search.." />
        </div>
        <input 
          name="check"
          id="check" 
          type="checkbox"
          checked={inStock}
          onChange={(e) => stockOnly(e.target.checked)} />
        <label for="check">Tampilkan Stock Product Tersisa</label>
      </div>
  );
}
function CategoriRow({categori}){
  return(
    <tr>
      <td colspan="2" className="bg-white text-black  text-center font-bold">{categori}</td>
    </tr>
  );
}
function ProductTable({
  product,
  filterText,
  inStock}) {
  const row = [];
  let lastCategori = null;

  product.forEach((product) => {

    if (
      product.nama.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) { 
      return;
    }
    if (inStock && !product.stocked) {
      return;
    }

    if(product.categori !== lastCategori){
      row.push(
        <>
        <CategoriRow 
          categori = {product.categori} />
          <tr className="font-bold">
        <td>Nama</td>
        <td>harga</td>
      </tr>
        </>
        
          
      );
    }
    row.push(
      <ProductRow 
        product = {product}/>
    );

    lastCategori = product.categori;
  });
  
  return(
    <table className="w-full">
      {row}
    </table>
  );
}
function ProductRow({ product }) {
  const nama = product.stocked ? product.nama :
    <td className="text-red-500">{product.nama}</td>
  return (
    <tr>
      <td className="border-2">{nama}</td>
      <td className="border-2">Rp.{product.harga}</td>
    </tr>
  );
}

const barang = [
  { categori: "Buah", stocked: true, nama: "Apel", harga: 5000 },
  { categori: "Buah", stocked: true, nama: "Buah Naga", harga: 20000 },
  { categori: "Buah", stocked: false, nama: "Pepaya", harga: 10000 },
  { categori: "Sayuran", stocked: true, nama: "Bayam", harga: 5000 },
  { categori: "Sayuran", stocked: true, nama: "Tomat", harga: 8000 },
  { categori: "Sayuran", stocked: false, nama: "Cabai", harga: 12000 },
  { categori: "Sayuran", stocked: false, nama: "Bawang", harga: 5000},
  { categori: "Makanan", stocked: true, nama: "Mie Sedap", harga: 3000},
  { categori: "Makanan", stocked: true, nama: "Pop Mie", harga: 5000},
  { categori: "Makanan", stocked: false, nama: "Sarimi", harga: 4500}
];

export default App;

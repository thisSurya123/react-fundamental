function App() {
  return (
    <div className="md:w-3/5 h-3/5 md:m-auto bg-black h-screen text-white">

      <div className="bg-gray-500 p-5">
        Product Information
      </div>
      <div className="p-2">
        <div className="mb-5">
          <input className="w-full text-center p-2 bg-gray-900" type="text" placeholder="Search.." />
        </div>
        <input name="check" id="check" type="checkbox" />
        <label for="check">Tampilkan Stock Product Tersisa</label>
      </div>
      <ProductTable
        product={barang}/>
    </div>
  );
}

function CategoriRow({categori}){
  return(
    <tr colspan="2">
      <td className=" text-center font-bold">{categori}</td>
    </tr>
  );
}
function ProductTable({product}) {
  const row = [];
  let lastCategori = null;

  product.forEach((product) => {
    if(product.categori !== lastCategori){
      row.push(
        <CategoriRow 
          categori = {product.categori} />
      );
    }
    row.push(
      <ProductRow 
        product = {product}/>
    );

    lastCategori = product.categori;
  });
  
  return(
    <table className="w-full b-2  border-indigo-200">
      <tr className="font-bold">
        <td>Nama</td>
        <td>harga</td>
      </tr>
      {row}
    </table>
  );
}
function ProductRow({ product }) {
  const nama = product.stocked ? product.nama :
    <td className="text-red-500">{product.nama}</td>
  return (
    <tr>
      <td>{nama}</td>
      <td>{product.harga}</td>
    </tr>
  );
}

const barang = [
  { categori: "Buah", stocked: true, nama: "Apel", harga: 5000 },
  { categori: "Buah", stocked: true, nama: "Buah Naga", harga: 20000 },
  { categori: "Buah", stocked: false, nama: "Pepaya", harga: 10000 },
  { categori: "Sayuran", stocked: true, nama: "Bayam", harga: 5000 },
  { categori: "Sayuran", stocked: true, nama: "Tomat", harga: 8000 },
  { cateogri: "Sayuran", stocked: false, nama: "Cabai", harga: 12000 }
];

export default App;

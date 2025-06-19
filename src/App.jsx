import { useState } from 'react'

export default function App() {
  const [userID, setUserID] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")

  const packages = [
    { id: 100, price: 0.99 },
    { id: 310, price: 2.49 },
    { id: 520, price: 3.99 },
    { id: 1060, price: 7.99 },
    { id: 2180, price: 14.99 },
    { id: 5600, price: 34.99 }
  ]

  const handlePurchase = () => {
    if (!userID || !selectedPackage) {
      alert("Por favor ingresa tu ID y selecciona un paquete.")
      return
    }
    alert(`Pedido realizado:\nID: ${userID}\nDiamantes: ${selectedPackage}`)
  }

  return (
    <div style={{ background: '#4F46E5', minHeight: '100vh', padding: 20, color: '#fff' }}>
      <h1>WASOTV PRO RECARGAS</h1>

      <input
        placeholder="Ingresa tu ID de Free Fire"
        value={userID}
        onChange={e => setUserID(e.target.value)}
        style={{ padding: 10, width: '100%', marginBottom: 20 }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {packages.map(pkg => (
          <button
            key={pkg.id}
            onClick={() => setSelectedPackage(pkg.id)}
            style={{
              padding: 15,
              background: selectedPackage === pkg.id ? '#16A34A' : '#2563EB',
              color: '#fff',
              border: 'none',
              borderRadius: 5
            }}
          >
            {pkg.id} 💎 - ${pkg.price}
          </button>
        ))}
      </div>

      <button onClick={handlePurchase} style={{ marginTop: 20, padding: 15, background: '#F59E0B', border: 'none', borderRadius: 5 }}>
        Comprar Ahora
      </button>
    </div>
  )
}

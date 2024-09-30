export const formatoPesosColombianos = (numero) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(numero);
}

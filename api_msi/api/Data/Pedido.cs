using System;
using System.Collections.Generic;

namespace api.Data
{
    public partial class Pedido
    {
        public uint IdPedido { get; set; }
        public DateOnly Fecha { get; set; }
        public uint IdCliente { get; set; }
        public uint IdEmpleado { get; set; }
        public uint IdDetallePedido { get; set; }
    }
}

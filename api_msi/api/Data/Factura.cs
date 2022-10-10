using System;
using System.Collections.Generic;

namespace api.Data
{
    public partial class Factura
    {
        public uint IdFactura { get; set; }
        public DateOnly Fecha { get; set; }
        public uint IdFormasPago { get; set; }
        public uint IdPedido { get; set; }

        public virtual FormasPago IdFormasPagoNavigation { get; set; } = null!;
    }
}

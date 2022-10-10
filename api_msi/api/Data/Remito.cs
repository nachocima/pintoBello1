using System;
using System.Collections.Generic;

namespace api.Data
{
    public partial class Remito
    {
        public uint IdRemito { get; set; }
        public int? Confrimar { get; set; }
        public uint IdDetalleFactura { get; set; }
    }
}

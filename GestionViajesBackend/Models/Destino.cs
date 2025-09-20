namespace GestionViajesBackend.Models
{
    public class Destino
    {
        public int DestinoId { get; set; }
        public string Nombre { get; set; }
        public string Pais { get; set; }
        public string Descripcion { get; set; }
        public decimal Costo { get; set; }
    }

}

using GestionViajesBackend.Models;
using GestionVisitasBackend.Modelos;

namespace GestionViajesBackend.Models
{
    public class Reserva
    {
        public int ReservaId { get; set; }
        public int TuristaId { get; set; }
        public int DestinoId { get; set; }
        public DateTime FechaReserva { get; set; }
        public int CantidadPersonas { get; set; }
        public decimal Total { get; set; }

        public Turista Turista { get; set; }
        public Destino Destino { get; set; }
    }
}

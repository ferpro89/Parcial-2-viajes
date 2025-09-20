using GestionViajesBackend.Models;
using GestionVisitasBackend.Modelos;
using Microsoft.EntityFrameworkCore;

namespace GestionViajesBackend.Datos
{
    public class GestionViajesContext : DbContext
    {
        public GestionViajesContext(DbContextOptions<GestionViajesContext> options)
            : base(options)
        {
        }

        // Constructor sin parámetros para migraciones
        public GestionViajesContext() { }

        public DbSet<Destino> Destinos { get; set; }
        public DbSet<Turista> Turistas { get; set; }
        public DbSet<Reserva> Reservas { get; set; }
    }
}

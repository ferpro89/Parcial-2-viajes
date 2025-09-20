using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace GestionViajesBackend.Datos
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<GestionViajesContext>
    {
        public GestionViajesContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<GestionViajesContext>();
            optionsBuilder.UseSqlServer("Server=localhost;Database=GestionViajesDB;Trusted_Connection=True;Encrypt=False");

            return new GestionViajesContext(optionsBuilder.Options);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using GestionViajesBackend.Models;

namespace GestionViajesBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservasController : ControllerBase
    {
        [HttpPost]
        public IActionResult CrearReserva([FromBody] Reserva reserva)
        {
            // Aquí puedes guardar en la base de datos si ya tienes el contexto
            return Ok(new { mensaje = "Reserva creada exitosamente" });
        }
    }
}

using Timesheet.Application;
using Timesheet.Domain;
using Timesheet.Infrastructure;

namespace Timesheet.API
{
    public static class ConfigureServices
    {
        public static IServiceCollection ConfigureDependancyInjection(this IServiceCollection services, IConfiguration configuration)
        {
            _ = services.AddApplicationServices();
            _ = services.AddDomainServices();
            _ = services.AddInfrastructureServices(configuration);
            return services;
        }
    }
}

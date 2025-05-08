using Microsoft.Extensions.DependencyInjection;

namespace Timesheet.Domain
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddDomainServices(this IServiceCollection services)
        {
            return services;
        }
    }
}

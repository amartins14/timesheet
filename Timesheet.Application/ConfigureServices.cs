﻿using Microsoft.Extensions.DependencyInjection;

namespace Timesheet.Application
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            return services;
        }
    }
}

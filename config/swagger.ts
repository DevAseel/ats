import { PORT } from "./constants";
export const swaggerOptions = {
	definition: {
		openapi: "3.0.3",
		info: {
			title: "ATS API",
			version: "1.0.0",
			description: "API documentation for ATS",
			contact: {
				name: "Aseel Al Rawahi",
				email: "dev.aseel@outlook.com",
			},
		},
		servers: [
			{
				url: `http://localhost:${PORT}`,
				description: "local development",
			},
		],
		components: {
			securitySchemes: {
				BearerAuth: {
					type: "http",
					scheme: "bearer",
				},
			},
		},
	},
	apis: ["./endpoints/healthCheck.ts"],
};

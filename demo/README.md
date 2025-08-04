# Demo Docker Compose Setup

This directory contains a modular Docker Compose setup that separates the application configuration from the production infrastructure.

## Structure

- `compose.yaml` - Top-level production compose file with Traefik reverse proxy
- `pwi/compose.yaml` - Standalone compose file for PWI development/testing

## Usage

### Production Deployment

To deploy the full production stack with Traefik reverse proxy:

```bash
cd demo
docker compose up -d
```

This will:

- Build the PWI application from the `pwi` directory
- Start Typesense search service
- Configure Traefik reverse proxy with SSL certificates
- Set up routing for `pwi-demo.poetry.software`

### Development/Testing

To run just the PWI application for development:

```bash
cd demo/pwi
docker compose up -d
```

This will:

- Build and start the PWI application
- Start Typesense search service
- Expose the application on `http://localhost:8000`

## Benefits of This Structure

1. **Separation of Concerns**: Application configuration is separate from infrastructure
2. **Reusability**: The pwi compose file can be used in different environments
3. **Maintainability**: Changes to the application don't require modifying production infrastructure
4. **Asset Building**: The build context is now correctly set to the application directory, fixing asset compilation issues

## Configuration

The production setup includes:

- Automatic SSL certificate generation via Let's Encrypt
- HTTP to HTTPS redirects
- Custom domain routing
- Health checks for services
- Persistent volumes for data storage

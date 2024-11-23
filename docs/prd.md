# Product Requirements Document (PRD)

## Product Name: Airport Weather Alert System (AWAS)

---

## Objective

To create a web-based application using cached METAR data to provide weather-based alerts for airports. The MVP will allow users to filter and visualize airport weather conditions, and store historical METAR data for future visualization and analysis.

---

## Key Features (MVP)

1. **Cached and Historical Weather Data Integration**
   - Use publicly available cached METAR data from aviationweather.gov or similar APIs.
   - Persist all fetched METAR reports in the database, ensuring existing data is not overridden.
   - Support for future historical data visualization (not in MVP frontend).

2. **Filtering System**
   - Users can set filters for:
     - Wind speed thresholds (e.g., >10 knots).
     - Cloud ceilings (e.g., <200 feet).
     - Visibility (e.g., <3 miles).
   - Results displayed in a list and/or map format.

3. **Airport Visualization**
   - Free, open-source map-based interface showing:
     - Airport locations with color-coded markers based on weather conditions.
   - List view with sortable columns, including airport code, weather metrics, etc.

4. **Alert System**
   - Configurable alerts for:
     - Specific airports or all airports meeting certain criteria.
   - Alerts displayed via the web interface (future versions may support email/SMS).

5. **Historical Data**
   - Historical METAR data will be stored in the database for future visualization and analysis.
   - Backfilled historical data may be added in later phases if accessible.

6. **Simple, No-Auth Usage**
   - No user accounts required for the MVP.
   - Filter settings and alert preferences reset per session.

7. **Responsive UI**
   - Optimized for desktop and mobile browsers using Next.js.

---

## Technology Overview

- **Frontend/Backend Framework:** Next.js (React-based).
- **Hosting:** Vercel.
- **Mapping Tool:** [Leaflet.js](https://leafletjs.com/) (free and open-source).
- **Data Source:** Cached METAR data via aviationweather.gov or other accessible sources.
- **Database:** PostgreSQL or SQLite using [Drizzle ORM](https://orm.drizzle.team/) for schema management and queries.
- **Notification System:** Simple in-browser alerts or notifications.

---

## Phases and Stories

### **Phase 1: Data Integration**

1. Research and connect to cached METAR data sources (e.g., aviationweather.gov).
2. Build a backend service to periodically fetch METAR data and store it in the database.
3. Persist METAR data as a time-series dataset, ensuring existing data is not overridden.
4. Parse METAR data into a simplified format (JSON) for querying.

### **Phase 2: Airport Data Display**

1. Build API endpoints to fetch airport and weather data.
2. Implement Leaflet.js to display airport locations on a map with basic markers.
3. Add a list view for airports with sortable weather-related columns.

### **Phase 3: Filtering**

1. Develop frontend UI components for filtering (wind speed, ceiling, visibility).
2. Implement backend logic to filter data based on user-selected criteria.
3. Update map and list views to reflect filtered results.

### **Phase 4: Alerts**

1. Build an interface to configure simple alerts (e.g., input thresholds).
2. Implement alert logic in the backend to compare cached METAR data to thresholds.
3. Display alerts in the UI with visual emphasis.

### **Phase 5: Historical Data**

1. Ensure METAR data is stored with timestamps and never overridden.
2. Add database queries to support future retrieval of historical METAR data.
3. Design API endpoints to retrieve historical data (for later frontend integration).
4. Build a simple JSON-based export feature for historical METAR data.

### **Phase 6: Frontend Enhancements**

1. Style the application for usability and aesthetic appeal.
2. Ensure responsive design for mobile and desktop views.

### **Phase 7: Testing and Deployment**

1. Test the backend and frontend for performance and bugs.
2. Deploy the application to Vercel and monitor usage metrics.

---

## Suggested Tools

1. **Mapping**
   - **Leaflet.js**: Open-source map solution for displaying airport data.
   - **OpenStreetMap**: Free map tile provider compatible with Leaflet.js.

2. **METAR Parsing**
   - **[metar-taf-parser](https://github.com/jachinte/metar-taf-parser):** Node.js library for parsing METAR and TAF data into human-readable formats.
   - **[aviation-metar-decoder](https://github.com/fabulousduck/aviation-metar-decoder):** Another option for breaking METAR data into structured JSON.

3. **Database**
   - **Drizzle ORM**: Lightweight and type-safe ORM for interacting with PostgreSQL or SQLite.

4. **Frontend State Management**
   - **Zustand** or **Redux Toolkit**: Manage global state for filtering and alert settings.

5. **Task Scheduling**
   - **node-cron**: Lightweight library for scheduling periodic METAR data fetches.

---

## Basic Data Model

### **Airport**

- `id` (Primary Key): Unique identifier.
- `icao_code` (String): ICAO code of the airport.
- `name` (String): Name of the airport.
- `latitude` (Float): Latitude of the airport.
- `longitude` (Float): Longitude of the airport.

### **METAR Report**

- `id` (Primary Key): Unique identifier for the report.
- `airport_id` (Foreign Key): Links to the `Airport` table.
- `report_time` (Datetime): Time the METAR report was issued.
- `wind_speed` (Integer): Wind speed in knots.
- `cloud_ceiling` (Integer): Lowest cloud layer in feet.
- `visibility` (Float): Visibility in miles.
- `temperature` (Float): Current temperature in Celsius.

### **User Filter (Session-Specific)**

- `id` (Primary Key): Unique identifier for the filter.
- `session_id` (String): Anonymous session ID for the user.
- `wind_speed_threshold` (Integer): User-specified wind speed threshold.
- `cloud_ceiling_threshold` (Integer): User-specified cloud ceiling threshold.
- `visibility_threshold` (Float): User-specified visibility threshold.

### **Alert**

- `id` (Primary Key): Unique identifier for the alert.
- `airport_id` (Foreign Key): Links to the `Airport` table.
- `session_id` (String): Anonymous session ID for the user.
- `condition` (String): Description of the condition that triggered the alert.
- `alert_time` (Datetime): Time the alert was triggered.

---

## Gaps and Recommendations

1. **Visualization of Historical Data**
   - **Problem:** Users cannot view or analyze historical trends in the frontend yet.
   - **Recommendation:** Future versions should include time-series visualizations (e.g., line graphs of wind speed over time).

2. **Data Storage Size**
   - **Problem:** Storing large amounts of historical METAR data may lead to database bloat.
   - **Recommendation:** Implement pruning policies (e.g., archiving data older than a year) or use a storage-optimized database like TimescaleDB for time-series data.

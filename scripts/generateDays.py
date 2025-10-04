import json
from datetime import datetime, timedelta

# Set your desired start and end dates here
start_date_str = "9/30/2025"   # Change as needed
end_date_str = "9/30/2030"      # Change as needed

start_date = datetime.strptime(start_date_str, "%m/%d/%Y")
end_date = datetime.strptime(end_date_str, "%m/%d/%Y")

# List to hold the generated days
days = []

# Start with South Lisbon, alternate each week
zone = "South Lisbon"

current_date = start_date
while current_date <= end_date:
    days.append({
        "date": current_date.strftime("%#m/%#d/%Y"),  # For Windows
        "zone": zone
    })
    # Alternate zone
    zone = "North Lisbon" if zone == "South Lisbon" else "South Lisbon"
    # Next Tuesday
    current_date += timedelta(days=7)

# Save to days.json
json_path = r'days.json'
with open(json_path, 'w') as f:
    json.dump(days, f, indent=4)

print(f"Generated days.json with every Tuesday from {start_date_str} to {end_date_str}.")
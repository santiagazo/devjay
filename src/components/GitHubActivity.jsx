import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar"; // Import the GitHubCalendar library
import "github-calendar/dist/github-calendar-responsive.css"; // Import the library's CSS

const GitHubActivity = () => {
    useEffect(() => {
        // Initialize the calendar
        GitHubCalendar(".calendar", "santiagazo", { responsive: true });
    }, []);

    return (
        <div>
            <div className="calendar">Loading your GitHub activity...</div>
        </div>
    );
};

export default GitHubActivity;
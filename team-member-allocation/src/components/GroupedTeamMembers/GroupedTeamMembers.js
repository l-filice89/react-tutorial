import React from 'react';
import PropTypes from 'prop-types';
import {useState} from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {
        let teamsName = ['TeamA', 'TeamB', 'TeamC', 'TeamD'];
        let teams = [];
        teamsName.forEach((team) => {
            let teamMembers = employees.filter((employee) => employee.teamName === team);
            teams.push({team: team, members: teamMembers, collapsed: selectedTeam !== team});
        });
        return teams;
    }

    function handleTeamClick(event) {
        let newGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ?
            {...groupedData, collapsed: !groupedData.collapsed} : groupedData);
        setGroupedData()
    }

    return (
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className="card mt-2" style={{cursor: "pointer"}}>
                            <h4 id={item.team} className="card-header text-secondary bg-white"
                                onClick={handleTeamClick}>
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse" + item.team}
                                 className={item.collapsed ? "collapse" : ""}>
                                <hr/>
                                {
                                    item.members.map((member) => {
                                        return (
                                            <div key={member.fullName} className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </main>
    );
}

GroupedTeamMembers.propTypes = {};

GroupedTeamMembers.defaultProps = {};

export default GroupedTeamMembers;

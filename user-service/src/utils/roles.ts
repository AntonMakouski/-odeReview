interface User {
    id: number;
    name: string;
    roleId: number;
}

interface Role {
    id: number;
    title: string;
    active: boolean;
}

function findRoles(
    users: User[],
    roles: Role[]
): any[] {
    const result: { id: number; name: string; role: string }[] = [];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        let roleObj = roles.find(role => role.id === user.roleId);

        const assignedRole = roleObj ? roleObj.title : "Default Role";

        result.push({
            id: user.id,
            name: user.name,
            role: assignedRole,
        });
    }

    return result;
}

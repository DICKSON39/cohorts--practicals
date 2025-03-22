import { AppDataSource } from "../data-source";
import { Role } from "../entity/Roles";

const seedRoles = async () => {
    await AppDataSource.initialize();

    const roleRepo = AppDataSource.getRepository(Role)

    const roles = ["Admin", "User"]

    for (const roleName of roles) {
        const existingRole = await roleRepo.findOne({where: {roleName: roleName}})

        if(!existingRole) {
            const role = roleRepo.create({roleName: roleName})
            await roleRepo.save(role)
            console.log(`Role creates: ${roleName}`)
        }
    }

    console.log("Roles seeding Completed!")
    process.exit()
}

seedRoles();
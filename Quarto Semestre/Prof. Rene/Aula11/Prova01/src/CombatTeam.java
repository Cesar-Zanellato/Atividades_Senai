import java.util.List;

public class CombatTeam {
    private Integer numberMembers;
    private List<User> users;
    private Leader leader;
    private ParkAddress parkAddress;

    
    public CombatTeam() {
    }


    public CombatTeam(Integer numberMembers, List<User> users, Leader leader, ParkAddress parkAddress) {
        this.numberMembers = numberMembers;
        this.users = users;
        this.leader = leader;
        this.parkAddress = parkAddress;
    }

    public Integer getNumberMembers() {
        return numberMembers;
    }

    public void setNumberMembers(Integer numberMembers) {
        this.numberMembers = numberMembers;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public Leader getLeader() {
        return leader;
    }

    public void setLeader(Leader leader) {
        this.leader = leader;
    }

    public ParkAddress getParkAddress() {
        return parkAddress;
    }

    public void setParkAddress(ParkAddress parkAddress) {
        this.parkAddress = parkAddress;
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((numberMembers == null) ? 0 : numberMembers.hashCode());
        result = prime * result + ((users == null) ? 0 : users.hashCode());
        result = prime * result + ((leader == null) ? 0 : leader.hashCode());
        result = prime * result + ((parkAddress == null) ? 0 : parkAddress.hashCode());
        return result;
    }


    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        CombatTeam other = (CombatTeam) obj;
        if (numberMembers == null) {
            if (other.numberMembers != null)
                return false;
        } else if (!numberMembers.equals(other.numberMembers))
            return false;
        if (users == null) {
            if (other.users != null)
                return false;
        } else if (!users.equals(other.users))
            return false;
        if (leader == null) {
            if (other.leader != null)
                return false;
        } else if (!leader.equals(other.leader))
            return false;
        if (parkAddress == null) {
            if (other.parkAddress != null)
                return false;
        } else if (!parkAddress.equals(other.parkAddress))
            return false;
        return true;
    }


    @Override
    public String toString() {
        return "CombatTeam [numberMembers=" + numberMembers + ", users=" + users + ", leader=" + leader
                + ", parkAddress=" + parkAddress + "]";
    }
    
    


    
    
}

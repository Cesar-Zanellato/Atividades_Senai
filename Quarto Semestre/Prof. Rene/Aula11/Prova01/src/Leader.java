public class Leader extends User {
    private Boolean isAdmin;
    private String team;
    
    public Leader(){
    }

    public Leader(String name, String lastName, String email, String password, Boolean isAdmin, String team) {
        super(name, lastName, email, password);
        this.isAdmin = isAdmin;
        this.team = team;
    }

    public Boolean getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Boolean isAdmin) {
        this.isAdmin = isAdmin;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = super.hashCode();
        result = prime * result + ((isAdmin == null) ? 0 : isAdmin.hashCode());
        result = prime * result + ((team == null) ? 0 : team.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (!super.equals(obj))
            return false;
        if (getClass() != obj.getClass())
            return false;
        Leader other = (Leader) obj;
        if (isAdmin == null) {
            if (other.isAdmin != null)
                return false;
        } else if (!isAdmin.equals(other.isAdmin))
            return false;
        if (team == null) {
            if (other.team != null)
                return false;
        } else if (!team.equals(other.team))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Leader [isAdmin=" + isAdmin + ", team=" + team + "]";
    }
    
}

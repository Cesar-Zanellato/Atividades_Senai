import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class FireSpot {
    private LocalDate start;
    private LocalDate end;
    private String cause;
    private String status;
    private Identification identification;
    private Intensity intensity;
    private List<User> users;
    private ParkAddress parkAddress;
    private Sensor sensor;

    
    public FireSpot() {
    }


    public FireSpot(LocalDate start, LocalDate end, String cause, String status, Identification identification,
            Intensity intensity, List<User> users, ParkAddress parkAddress, Sensor sensor) {
        this.start = start;
        this.end = end;
        this.cause = cause;
        this.status = status;
        this.identification = identification;
        this.intensity = intensity;
        this.users = users;
        this.parkAddress = parkAddress;
        this.sensor = sensor;
    }


    public LocalDate getStart() {
        return start;
    }


    public void setStart(LocalDate start) {
        this.start = start;
    }


    public LocalDate getEnd() {
        return end;
    }


    public void setEnd(LocalDate end) {
        this.end = end;
    }


    public String getCause() {
        return cause;
    }


    public void setCause(String cause) {
        this.cause = cause;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }


    public Identification getIdentification() {
        return identification;
    }


    public void setIdentification(Identification identification) {
        this.identification = identification;
    }


    public Intensity getIntensity() {
        return intensity;
    }


    public void setIntensity(Intensity intensity) {
        this.intensity = intensity;
    }


    public List<User> getUsers() {
        return users;
    }


    public void setUsers(List<User> users) {
        this.users = users;
    }


    public ParkAddress getParkAddress() {
        return parkAddress;
    }


    public void setParkAddress(ParkAddress parkAddress) {
        this.parkAddress = parkAddress;
    }


    public Sensor getSensor() {
        return sensor;
    }


    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }


    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((start == null) ? 0 : start.hashCode());
        result = prime * result + ((end == null) ? 0 : end.hashCode());
        result = prime * result + ((cause == null) ? 0 : cause.hashCode());
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        result = prime * result + ((identification == null) ? 0 : identification.hashCode());
        result = prime * result + ((intensity == null) ? 0 : intensity.hashCode());
        result = prime * result + ((users == null) ? 0 : users.hashCode());
        result = prime * result + ((parkAddress == null) ? 0 : parkAddress.hashCode());
        result = prime * result + ((sensor == null) ? 0 : sensor.hashCode());
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
        FireSpot other = (FireSpot) obj;
        if (start == null) {
            if (other.start != null)
                return false;
        } else if (!start.equals(other.start))
            return false;
        if (end == null) {
            if (other.end != null)
                return false;
        } else if (!end.equals(other.end))
            return false;
        if (cause == null) {
            if (other.cause != null)
                return false;
        } else if (!cause.equals(other.cause))
            return false;
        if (status == null) {
            if (other.status != null)
                return false;
        } else if (!status.equals(other.status))
            return false;
        if (identification != other.identification)
            return false;
        if (intensity != other.intensity)
            return false;
        if (users == null) {
            if (other.users != null)
                return false;
        } else if (!users.equals(other.users))
            return false;
        if (parkAddress == null) {
            if (other.parkAddress != null)
                return false;
        } else if (!parkAddress.equals(other.parkAddress))
            return false;
        if (sensor == null) {
            if (other.sensor != null)
                return false;
        } else if (!sensor.equals(other.sensor))
            return false;
        return true;
    }


    @Override
    public String toString() {

        DateTimeFormatter formatterStart = DateTimeFormatter.ofPattern(
                "dd/MM/yyyy");
        String criacaoStringStart = formatterStart.format(start);

        DateTimeFormatter formatterEnd = DateTimeFormatter.ofPattern(
                "dd/MM/yyyy");
        String criacaoStringEnd = formatterEnd.format(end);

        return "FireSpot [start=" + criacaoStringStart + ", end=" + criacaoStringEnd + ", cause=" + cause + ", status=" + status
                + ", identification=" + identification + ", intensity=" + intensity + ", users=" + users
                + ", parkAddress=" + parkAddress + ", sensor=" + sensor + "]";
    }

    

}

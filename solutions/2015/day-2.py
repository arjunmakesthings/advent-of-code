filename = "2015_2_2.txt"


def extract(instruction):
    """nxyxz -> [n, y, z]"""
    return [int(x) for x in instruction.split("x")]


def calc_smallest_sides(dimensions):
    return sorted(dimensions)[:2]


def calculate_ribbon(dimensions):
    smallest_sides = calc_smallest_sides(dimensions)
    permimiter = (
        smallest_sides[0] + smallest_sides[0] + smallest_sides[1] + smallest_sides[1]
    )
    volume = dimensions[0] * dimensions[1] * dimensions[2]

    return permimiter + volume


def calculate_surface_area(dimensions):
    """[x,y,z] -> surface area"""
    area = (
        (2 * dimensions[0] * dimensions[1])
        + (2 * dimensions[1] * dimensions[2])
        + (2 * dimensions[2] * dimensions[0])
    )
    smallest_sides = calc_smallest_sides(dimensions)
    spare = smallest_sides[0] * smallest_sides[1]
    return area + spare


with open(filename, "r") as infile:
    lines = infile.readlines()
    area = 0
    ribbon = 0
    for count, line in enumerate(lines):
        line = line.strip()
        line = extract(line)
        area += calculate_surface_area(line)
        ribbon += calculate_ribbon(line)

    print(f"area: {area}")
    print(f"ribbon: {ribbon}")
